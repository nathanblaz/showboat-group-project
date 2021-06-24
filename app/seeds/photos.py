from app.models import db, Photo


def seed_photos():
    photo1 = Photo(
        title='demoPhoto',
        caption='Photo by John Matychuk on Unsplash',
        image_url='https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        user_id=1,
        date_taken='2021-06-21'
        )
    photo2 = Photo(
        title='secondPhoto',
        caption='Photo by Zongnan Bao on Unsplash',
        image_url='https://images.unsplash.com/photo-1620321267981-4f87e530f093?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
        user_id=2,
        date_taken='2021-06-21'
        )
    photo3 = Photo(
        title='secondPhoto',
        caption='Photo by mana5280 on Unsplash',
        image_url='https://images.unsplash.com/photo-1623679971411-7b7d672bca5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1983&q=80',
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
