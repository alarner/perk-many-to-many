exports.up = function(knex, Promise) {
    return knex.schema.createTable('applications', function(t) {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.dateTime('deletedAt').nullable();

        t.string('firstName').notNull();
        t.string('lastName').notNull();
        t.decimal('gpa', 3, 2).notNull();
        t.text('essay').notNull();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('applications');
};