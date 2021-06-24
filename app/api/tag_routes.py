from flask import Blueprint, request
from app.models import db, Comment, Tag, Photo
from flask_login import current_user, login_required

tag_routes = Blueprint('tags', __name__)


@tag_routes.route("")
def get_photo_tags():
    tags = Tag.query.all()
    return {'tags': [tag.to_dict() for tag in tags]}


@tag_routes.route("/new", methods=['POST'])
@login_required
def add_photo_tag():
    new_tag = Tag(
        name=request.form["name"]
    )
    # print('*************************', new_tag.name)
    db.session.add(new_tag)
    db.session.commit()
    return new_tag.to_dict()
