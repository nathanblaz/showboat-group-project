from app.models import db, Photo


def seed_photos():
    photo1 = Photo(
        title='demoPhoto',
        caption='this is the coolest photo ever',
        image_url='https://unsplash.com/photos/gUK3lA3K7Yo',
        user_id=1,
        date_taken='2021-06-21'
        )
    photo2 = Photo(
        title='secondPhoto',
        caption='this is the coolest photo ever',
        image_url='https://unsplash.com/photos/GSQlx8VN6nE',
        user_id=2,
        date_taken='2021-06-21'
        )
    photo3 = Photo(
        title='secondPhoto',
        caption='this is the coolest photo ever',
        image_url='https://unsplash.com/photos/toaxe5i-7_Q',
        user_id=3,
        date_taken='2021-06-21'
        )

    db.session.add(photo1)
    db.session.add(photo2)
    db.session.add(photo3)

    db.session.commit()


def undo_photos():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
