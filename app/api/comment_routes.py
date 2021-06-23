from flask import Blueprint, request
from app.models import db, Comment, Photo
from flask_login import current_user, login_required

comment_routes = Blueprint('comments', __name__)


@comment_routes.route("")
def get_photo_comments():
    comments = Comment.query.filter_by(Comment.photo_id).all()
    return {'comments': [comment.to_dict() for comment in comments]}


@comment_routes.route("", methods={"POST"})
@login_required
def post_comment():
    new_comment = Comment(
        comment=request.form['comment'],
        photo_id=photo.id,
        user_id=current_user.id
    )
    db.session.add(new_comment)
    db.session.commit()
    return new_comment.to_dict()