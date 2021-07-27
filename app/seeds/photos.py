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
    new_photo_01 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1627334848323-6ce21facb54b.jpeg',
        user_id=1,
        date_taken='2021-07-01'
    )
    new_photo_02 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1627297527452-b42df4a152ff.jpeg',
        user_id=2,
        date_taken='2021-07-02'
    )
    new_photo_03 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1627255407634-752c249ebe32.jpeg',
        user_id=3,
        date_taken='2021-07-03'
    )
    new_photo_04 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1627245126222-60185a8b671f.jpeg',
        user_id=1,
        date_taken='2021-07-04'
    )

    db.session.add(photo1)
    db.session.add(photo2)
    db.session.add(photo3)

    db.session.commit()


def undo_photos():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
