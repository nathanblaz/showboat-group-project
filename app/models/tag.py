from .db import db
from .tag_photo_join import tags_photos


class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    # tags_photos_join = db.relationship("Tag_Photo_Join", back_populates="tags")
    photos = db.relationship("Photo", secondary=tags_photos, back_populates="tags")

    def to_dict(self):
        return{
            'id': self.id,
            'name': self.name,
            # "photos": self.photos
        }
