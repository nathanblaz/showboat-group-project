from flask import Blueprint, request, jsonify
from app.models import db, Photo
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename, delete_file_from_s3)

photo_routes = Blueprint("photos", __name__)


@photo_routes.route("", methods=["POST"])
@login_required
def upload_photo():
    if "photo" not in request.files:
        return {"errors": "photo required"}, 400

    photo = request.files["photo"]

    if not allowed_file(photo.filename):
        return {"errors": "file type not permitted"}, 400

    photo.filename = get_unique_filename(photo.filename)

    upload = upload_file_to_s3(photo)

    if "url" not in upload:
        # if the dictionary doesn't have a filename key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # WHERE DOES THE FORM DATA GO??????
    new_photo = Photo(
        title=request.form["title"],
        caption=request.form["caption"],
        image_url=url,
        user_id=current_user.id,
        date_taken=request.form["date_taken"]
    )
    db.session.add(new_photo)
    db.session.commit()
    print("*******new_photo is ", new_photo)
    return new_photo.to_dict()


@photo_routes.route("/<int:id>", methods=["PUT"])
@login_required
def update_photo(id):
    photo = Photo.query.get(id)
    photo.title = request.form["title"]
    photo.caption = request.form["caption"]
    photo.date_taken = request.form["date_taken"]
    db.session.add(photo)
    db.session.commit()
    return photo.to_dict()


@photo_routes.route("")
def get_all_photos():
    photos = Photo.query.order_by(Photo.created_at.desc()).all()
    print(Photo.query.filter())
    return {"photos": [photo.to_dict() for photo in photos]}


@photo_routes.route("/<int:id>")
def get_one_photo(id):
    photo = Photo.query.get(id)
    return photo.to_dict()


@photo_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_photo(id):
    photo = Photo.query.get(id)
    url = photo.image_url
    filename = url.removeprefix('http://showboat-app.s3.amazonaws.com/')
    delete_file_from_s3(filename)
    if not photo:
        return jsonify("photo not found")
    db.session.delete(photo)
    db.session.commit()
    return {'id': id}
