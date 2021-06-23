from flask import Blueprint, request
from app.models import db, Photo
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

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
    # we can use the
    print("***current user = ", current_user)
    new_photo = Photo(user_id=2, title="test-title", image_url=url)
    db.session.add(new_photo)
    db.session.commit()
    return {"url": url}


@photo_routes.route("")
def get_all_photos():
    photos = Photo.query.order_by(Photo.id.desc()).all()
    return {"photos": [photo.to_dict() for photo in photos]}


@photo_routes.route("/<int:id>")
def get_one_photo(id):
    photo = Photo.query.get(id)
    return photo.to_dict()