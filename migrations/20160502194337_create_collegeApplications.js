exports.up = function(knex, Promise) {
    return knex.schema.createTable('collegeApplications', function(t) {
        t.integer('collegeId') // collegeId is a foreign key to the colleges table
            .unsigned()
            .notNull()
            .references('id')
            .inTable('colleges')
            .onDelete('CASCADE');
        t.integer('applicationId') // applicationId is a foreign key to the applications table
            .unsigned()
            .notNull()
            .references('id')
            .inTable('applications')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('collegeApplications');
};