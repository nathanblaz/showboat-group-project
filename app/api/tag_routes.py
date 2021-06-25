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

# /tags/tagname/photos get route tagname would be specific parameter to pass into function. query db for tag that has that name. .filter(Tag.name = name passed into endpoint) tag.photos will give list of all the tags and then do list comprehension over photos, phot.to_dict for photo in tag.photos
# then useeffect in componetn that hits this end route


@tag_routes.route("/<int:id>", methods=["DELETE"])
# @login_required
def delete_tag(id):
    tag = Tag.query.get(id)
    db.session.delete(tag)
    db.session.commit()
    print("******** am I reaching this****", tag)
    return tag.to_dict()
