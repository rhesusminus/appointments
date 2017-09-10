## appointments-server
Right now it pretty much just authenticates user, sends jwt-token, etc. Basic stuff.

User authentication uses Passport, Jwt-strategy and local-strategy.

At the moment database is just a lowdb, a local JSON database. There has been some plans to use Firebase for, pretty much, everything. But right now I'll focus more on the client side.
