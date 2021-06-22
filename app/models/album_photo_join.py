from .db import db

albums_photos = db.Table(
    "albums_photos",
    db.Column(
        "albums_id",
        db.Integer,
        db.ForeignKey("albums.id"),
        primary_key=True
    ),
    db.Column(
        "photo_id",
        db.Integer,
        db.ForeignKey("photos.id"),
        primary_key=True
    )
)
