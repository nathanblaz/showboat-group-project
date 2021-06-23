from app.models import db, Tag


def seed_tags():
    tag1 = Tag(
        name='music'
        )
    tag2 = Tag(
        name='nature'
    )
    tag3 = Tag(
        name='family'
    )

    db.session.add(tag1)
    db.session.add(tag2)
    db.session.add(tag3)

    db.session.commit()


def undo_tags():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
