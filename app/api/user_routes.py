from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

user_routes = Blueprint('users', __name__)

#helper function
def upload_avatar(): # adds avatar to user details before creating the database instance
    # if "avatar" not in request.files:
    #     # use default image
    #     pass

    print("***************", request.files, "********************")

    avatar = request.files["avatar"]

    avatar.filename = get_unique_filename(avatar.filename)

    upload = upload_file_to_s3(avatar)
    # if "url" not in upload:
    # # if the dictionary doesn't have a url key
    # # it means that there was an error when we tried to upload
    # # so we send back that error message
    #     return upload, 400
    url = upload["url"]
    return url


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
