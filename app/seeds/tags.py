from app.models import db, Tag


def seed_tags():
    tag1 = Tag(
        tag_name='music'
        )

    db.session.add(tag1)

    db.session.commit()


def undo_tags():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
