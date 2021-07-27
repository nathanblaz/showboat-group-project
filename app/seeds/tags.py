from app.models import db, Tag


def seed_tags():
    tag1 = Tag(
        name='music',
        user_id=1
        )
    tag2 = Tag(
        name='nature',
        user_id=2
    )
    tag3 = Tag(
        name='family',
        user_id=3
    )

    db.session.add(tag1)
    db.session.add(tag2)
    db.session.add(tag3)

    db.session.commit()


def undo_tags():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
