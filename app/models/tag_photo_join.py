from .db import db


tags_photos = db.Table(
    "tags_photos",
    db.Column(
        "tags_id",
        db.Integer,
        db.ForeignKey("tags.id"),
        primary_key=True
    ),
    db.Column(
        "photo_id",
        db.Integer,
        db.ForeignKey("photos.id"),
        primary_key=True
    )
)
