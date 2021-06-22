from app.models import db, Album


def seed_albums():
    album1 = Album(
        title='demo Album',
        description='My favorite album',
        )

    db.session.add(album1)

    db.session.commit()


def undo_albums():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
