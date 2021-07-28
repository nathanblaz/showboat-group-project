from flask import Blueprint, request
from app.models import db, Comment, Tag, Photo
from flask_login import current_user, login_required

tag_routes = Blueprint('tags', __name__)


@tag_routes.route("")
def get_photo_tags():
    tags = Tag.query.all()
    # print('***********************************', tags)
    return {'tags': [tag.to_dict() for tag in tags]}


# @tag_routes.route('/photos/tagged', methods=['GET'])
# def get_tagged_photos():
#     photos = Photo.query.all()
#     return {'photos': [photo.to_dict() for photo in photos]}


@tag_routes.route("/<int:id>")
def get_one_tag(id):
    tag = Tag.query.get(id)
    return tag.to_dict()


@tag_routes.route("/delete/<int:id>", methods=["DELETE"])
# @login_required
def delete_tag(id):
    tag = Tag.query.get(id)
    db.session.delete(tag)
    db.session.commit()
    # print("******** am I reaching this****", tag)
    return {'id': id}

# To remove from photo but not from database: need to hit something with
# both photo id and tag. query for photo and tag.
# Instance not model photo.tags.remove(pass in tag object from db).
# sent back photo. won't have to hit tag reducer. hit photo reducer.


@tag_routes.route("/photo/new_tag", methods=['POST'])
@login_required
def add_photo_tag():
    new_tag = Tag(
        name=request.form["name"],
        user_id=request.form["user_id"]
    )
    id = request.form["id"]
    db.session.add(new_tag)
    photo = Photo.query.get(id)
    photo.tags.append(new_tag)
    # print('*************************', new_tag.name)
    db.session.add(photo)
    db.session.commit()
    return {"photo": photo.to_dict(), "tag": new_tag.to_dict()}


@tag_routes.route('/existing_tag', methods=['POST'])
def add_existing_tag_to_photo():
    id = request.form['tag_id']
    # print(id, "&&&&&&&&&&&&&&&&&&&&tag_id sent from the form")
    existing_tag = Tag.query.get(id)
    photo = Photo.query.get(request.form['photo_id'])

    photo.tags.append(existing_tag)
    db.session.add(photo)
    db.session.commit()
    return {"photo": photo.to_dict(), "tag": existing_tag.to_dict()}


@tag_routes.route("/update/<int:id>", methods=['PUT'])
def update_tag(id):
    # print(id, 'THIS IS THE ID FROM THE UPDATE TAG ROUTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    edit_tag = Tag.query.get(id)
    # print(edit_tag, "EDIT TAG FROM UPDATE TAG ROUTE^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
    edit_tag.name = request.form['tag_name']
    db.session.add(edit_tag)
    db.session.commit()
    return edit_tag.to_dict()
