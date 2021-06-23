from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo1 = User(
        username='Demo1',
        email='demo@aa.io',
        password='password',
        avatar='https://unsplash.com/photos/B24s5s2Ai_o'
        )
    demo2 = User(
        username='Demo2',
        email='demo1@aa.io',
        password='password',
        avatar='https://unsplash.com/photos/9ludL46nwps'
        )
    demo3 = User(
        username='Demo3',
        email='demo2@aa.io',
        password='password',
        avatar='https://unsplash.com/photos/Cl9JkM7SW6M'
        )

    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
