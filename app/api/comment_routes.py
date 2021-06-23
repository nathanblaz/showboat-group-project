from flask import Blueprint, request
from app.models import db, Comment, Photo
from flask_login import current_user, login_required

comment_routes = Blueprint('comments', __name__)


@comment_routes.route("")
def get_photo_comments():
    comments = Comment.query.order_by(Comment.created_at.desc()).all()
    return {'comments': [comment.to_dict() for comment in comments]}
