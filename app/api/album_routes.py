from flask import Blueprint, request
from app.models import db, Photo, Album, User
from flask_login import current_user, login_required
from sqlalchemy.orm import joinedload;
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

album_routes = Blueprint("albums", __name__)


@album_routes.route("/")
def get_all_albums():
    albums = Album.query.order_by(Album.title.desc()).all()
    if albums is None:
        return {"albums": "nothing here!"}
    return {"albums": [album.to_dict() for album in albums]}


@album_routes.route("/<int:id>")
def get_one_album(id):
    album = Album.query.get(id)
    if album is None:
        return {"albums": "nothing here!"}
    return album.to_dict()


@album_routes.route("/new", methods=["POST"])
# @login_required
def create_album():
    new_album = Album(
                    title=request.form["title"],
                    description=request.form["description"],
                    user_id=request.form["user_id"]
                    )
    db.session.add(new_album)
    db.session.commit()
    return new_album.to_dict()


@album_routes.route("/<id>", methods=["DELETE"])
# @login_required
def delete_album(id):
    print("****************inside delete route****************")
    album = Album.query.get(id)
    db.session.delete(album)
    print("***********album deleted in API route**************")
    db.session.commit()
    return {"success": "album deleted"}
