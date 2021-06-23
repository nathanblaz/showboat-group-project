from app.models import db, Comment


def seed_comments():
    comment1 = Comment(
        comment='Best concert ever!',
        photo_id=1,
        user_id=1
        
        )

    db.session.add(comment1)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
