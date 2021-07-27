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
    new_photo_05 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1627230123257-f9706d3cda86.jpeg',
        user_id=2,
        date_taken='2021-07-04'
    )
    new_photo_06 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1627224599653-aa6060d6ad10.jpeg',
        user_id=3,
        date_taken='2021-07-05'
    )
    new_photo_07 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1627211448588-7f56dd579128.jpeg',
        user_id=1,
        date_taken='2021-07-06'
    )
    new_photo_08 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1627208753013-8954b7089657.jpeg',
        user_id=2,
        date_taken='2021-07-07'
    )
    new_photo_09 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1627196038963-7aa32a9121fb.jpeg',
        user_id=3,
        date_taken='2021-07-08'
    )
    new_photo_10 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1627163627936-87219ad65d65.jpeg',
        user_id=1,
        date_taken='2021-07-09'
    )
    new_photo_11 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1627160280085-2dbb99a7c4ff.jpeg',
        user_id=2,
        date_taken='2021-07-10'
    )
    new_photo_12 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1627102769187-15da4c2fa6e4.jpeg',
        user_id=3,
        date_taken='2021-07-11'
    )
    new_photo_13 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1627001680612-d2debbb3d590.jpeg',
        user_id=1,
        date_taken='2021-07-12'
    )
    new_photo_14 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1627001678108-5039fd094cea.jpeg',
        user_id=2,
        date_taken='2021-07-13'
    )
    new_photo_15 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1626977005707-e3b0e1fd5449.jpeg',
        user_id=3,
        date_taken='2021-07-14'
    )
    new_photo_16 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1626971665385-746c90f5cc0f.jpeg',
        user_id=1,
        date_taken='2021-07-15'
    )
    new_photo_17 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1626970929048-0337093cfaf0.jpeg',
        user_id=2,
        date_taken='2021-07-16'
    )
    new_photo_18 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1626956974315-11fabb1f337b.jpeg',
        user_id=3,
        date_taken='2021-07-17'
    )
    new_photo_19 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1617202009609-74a52df21011.jpeg',
        user_id=1,
        date_taken='2021-07-18'
    )
    new_photo_20 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1581091878330-f5cf2a3b1564.jpeg',
        user_id=2,
        date_taken='2021-07-19'
    )
    new_photo_21 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1500462918059-b1a0cb512f1d.jpeg',
        user_id=3,
        date_taken='2021-07-20'
    )
    new_photo_22 = Photo(
        title='New Photo',
        caption='Photo from Unsplash',
        image_url='https://showboat-app.s3.us-west-1.amazonaws.com/photo-1499364615650-ec38552f4f34.jpeg',
        user_id=1,
        date_taken='2021-07-21'
    )

    db.session.add(photo1)
    db.session.add(photo2)
    db.session.add(photo3)
    db.session.add(new_photo_01)
    db.session.add(new_photo_02)
    db.session.add(new_photo_03)
    db.session.add(new_photo_04)
    db.session.add(new_photo_05)
    db.session.add(new_photo_06)
    db.session.add(new_photo_07)
    db.session.add(new_photo_08)
    db.session.add(new_photo_09)
    db.session.add(new_photo_10)
    db.session.add(new_photo_11)
    db.session.add(new_photo_12)
    db.session.add(new_photo_13)
    db.session.add(new_photo_14)
    db.session.add(new_photo_15)
    db.session.add(new_photo_16)
    db.session.add(new_photo_17)
    db.session.add(new_photo_18)
    db.session.add(new_photo_19)
    db.session.add(new_photo_20)
    db.session.add(new_photo_21)
    db.session.add(new_photo_22)

    db.session.commit()


def undo_photos():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
