from .db import db
from sqlalchemy import func


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    comment = db.Column(db.Text)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
    photo_id = db.Column(db.Integer, db.ForeignKey('photos.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    photos = db.relationship("Photo", back_populates="comments")
    users = db.relationship("User", back_populates="comments")

    def to_dict(self):
        return{
            'id': self.id,
            'comment': self.comment,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'photo_id': self.photo_id,
            'user_id': self.user_id,
            'user': self.users.to_dict(),
            'photo': self.photos.to_dict()
        }
