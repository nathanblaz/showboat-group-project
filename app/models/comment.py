from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    comment = db.Column(db.Text)
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)
    photo_id = db.Column(db.Integer, db.ForeignKey('photos.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    photos = db.relationship("Photo", back_populates="comments")
    users = db.relationship("User", back_populates="comments")
