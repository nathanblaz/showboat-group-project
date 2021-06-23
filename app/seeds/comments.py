from app.models import db, Comment


def seed_comments():
    comment1 = Comment(
        comment='Best concert ever!',
        photo_id=1,
        user_id=1
        )
    comment2 = Comment(
        comment='I love this pic!',
        photo_id=2,
        user_id=2
    )
    comment3 = Comment(
        comment='I love this pic!',
        photo_id=3,
        user_id=3
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
