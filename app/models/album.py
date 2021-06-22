from .db import db
from .album_photo_join import albums_photos


class Album(db.Model):
    __tablename__ = 'albums'

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    users = db.relationship("User", back_populates="albums")
    photos = db.relationship("Photo", secondary=albums_photos, back_populates="albums")