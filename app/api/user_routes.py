from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Album
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/albums')
def user_albums(id):
    albums = Album.query.filter(Album.user_id == id)
    return {"albums": [album.to_dict() for album in albums]}
