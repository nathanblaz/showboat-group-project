from .db import db
from .album_photo_join import albums_photos
from .tag_photo_join import tags_photos


class Photo(db.Model):
    __tablename__ = 'photos'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    caption = db.Column(db.String(300))
    image_url = db.Column(db.String(1000))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    date_taken = db.Column(db.Date)
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)
    users = db.relationship("User", back_populates="photos")
    comments = db.relationship("Comment", back_populates="photos")
    albums = db.relationship(
        "Album", secondary=albums_photos, back_populates="photos")
    tags = db.relationship("Tag", secondary=tags_photos,
                           back_populates="photos")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "caption": self.caption,
            "image_url": self.image_url,
            "user_id": self.user_id,
            "date_taken": self.date_taken,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
