from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo1 = User(
        username='Demo1',
        email='demo@aa.io',
        password='password',
        avatar='https://images.unsplash.com/photo-1624060686526-fea161786065?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        )
    demo2 = User(
        username='Demo2',
        email='demo1@aa.io',
        password='password',
        avatar='https://images.unsplash.com/photo-1570114181742-4bab3af44518?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'
        )
    demo3 = User(
        username='Demo3',
        email='demo2@aa.io',
        password='password',
        avatar='https://images.unsplash.com/photo-1456408786436-37ace5840ee5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80'
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
