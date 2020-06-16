- BUG #1: '/auth/register' and 'User.register()' was not storing 'admin' value
   
- BUG #2: Added await to 'let user = User.authenticate(username, password)' =>  'let user = await User.authenticate(username, password)'

- BUG #3: User.getAll() should only return '{username, first_name, last_name}'

- BUG #4: Added await to 'users/delete' route

test1
{
  "_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QxIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE1OTIzMjIzNjR9.PwHpd4GNBH3wS9QgZJGlbnLOOXG92eutxlJTEx8xw6c"
}

test2
{
    "_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QyIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE1OTIzNDM5MjB9.qqGUWAIvBYInNf4MLqjR_2tG_OdKYieCh48iOsfMDuM"
}

test3
{
    "_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QzIiwiYWRtaW4iOnRydWUsImlhdCI6MTU5MjM0NDcxOX0.AcjZPk9d82pDhJCXQ68mykpL42sCcKzdqh0_506jGvU"
}