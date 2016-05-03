exports.seed = function(knex, Promise) {
	return Promise.join(
		knex('colleges').del(),
		knex('applications').del()
	)
	.then(() => {
		return Promise.join(
			knex('colleges').insert({
				id: 1,
				name: 'Brown University',
				state: 'RI',
				website: 'http://brown.edu',
				createdAt: new Date()
			}),
			knex('colleges').insert({
				id: 2,
				name: 'Columbia University',
				state: 'NY',
				website: 'http://www.columbia.edu',
				createdAt: new Date()
			}),
			knex('colleges').insert({
				id: 3,
				name: 'Cornell University',
				state: 'NY',
				website: 'http://www.cornell.edu',
				createdAt: new Date()
			}),
			knex('colleges').insert({
				id: 4,
				name: 'Dartmouth College',
				state: 'NH',
				website: 'http://dartmouth.edu',
				createdAt: new Date()
			}),
			knex('colleges').insert({
				id: 5,
				name: 'Harvard University',
				state: 'MA',
				website: 'http://www.harvard.edu',
				createdAt: new Date()
			}),
			knex('colleges').insert({
				id: 6,
				name: 'University of Pennsylvania',
				state: 'PA',
				website: 'http://www.upenn.edu',
				createdAt: new Date()
			}),
			knex('colleges').insert({
				id: 7,
				name: 'Princeton University',
				state: 'NJ',
				website: 'http://www.princeton.edu',
				createdAt: new Date()
			}),
			knex('colleges').insert({
				id: 8,
				name: 'Yale University',
				state: 'CT',
				website: 'http://www.yale.edu',
				createdAt: new Date()
			})
		);
	})
	.then(() => {
		return Promise.join(
			knex('applications').insert({
				id: 1,
				firstName: 'Kathryn',
				lastName: 'Dutch',
				gpa: 4.0,
				essay: 'Lorem ipsum Et magna ad anim minim Ut cillum laborum irure sint minim sunt adipisicing pariatur consectetur in esse ad dolor ut incididunt sit ad exercitation qui Ut occaecat minim dolor Duis Excepteur minim nulla labore nisi non ut adipisicing sit id amet est culpa deserunt sunt quis Duis incididunt dolore adipisicing nisi Excepteur labore reprehenderit officia officia in consequat consectetur eu voluptate eu amet deserunt occaecat enim velit consequat nulla in do consequat cupidatat Duis in dolore deserunt mollit culpa non labore sint laborum exercitation eu enim dolore anim cillum nisi aliqua exercitation Excepteur nostrud et est est adipisicing occaecat amet qui do labore fugiat exercitation minim dolor occaecat fugiat officia veniam ut dolor quis sint adipisicing do esse labore et aliquip laborum fugiat et pariatur Duis in dolor fugiat Duis sint dolore eiusmod consectetur laboris ea esse dolore pariatur mollit laborum incididunt adipisicing voluptate laborum nulla qui et dolor sint in ut non.',
				createdAt: new Date()
			}),
			knex('applications').insert({
				id: 2,
				firstName: 'Hyginos',
				lastName: 'Bruno',
				gpa: 3.9,
				essay: 'Lorem ipsum Et magna ad anim minim Ut cillum laborum irure sint minim sunt adipisicing pariatur consectetur in esse ad dolor ut incididunt sit ad exercitation qui Ut occaecat minim dolor Duis Excepteur minim nulla labore nisi non ut adipisicing sit id amet est culpa deserunt sunt quis Duis incididunt dolore adipisicing nisi Excepteur labore reprehenderit officia officia in consequat consectetur eu voluptate eu amet deserunt occaecat enim velit consequat nulla in do consequat cupidatat Duis in dolore deserunt mollit culpa non labore sint laborum exercitation eu enim dolore anim cillum nisi aliqua exercitation Excepteur nostrud et est est adipisicing occaecat amet qui do labore fugiat exercitation minim dolor occaecat fugiat officia veniam ut dolor quis sint adipisicing do esse labore et aliquip laborum fugiat et pariatur Duis in dolor fugiat Duis sint dolore eiusmod consectetur laboris ea esse dolore pariatur mollit laborum incididunt adipisicing voluptate laborum nulla qui et dolor sint in ut non.',
				createdAt: new Date()
			}),
			knex('applications').insert({
				id: 3,
				firstName: 'Amando',
				lastName: 'Hailwic',
				gpa: 4.1,
				essay: 'Lorem ipsum Et magna ad anim minim Ut cillum laborum irure sint minim sunt adipisicing pariatur consectetur in esse ad dolor ut incididunt sit ad exercitation qui Ut occaecat minim dolor Duis Excepteur minim nulla labore nisi non ut adipisicing sit id amet est culpa deserunt sunt quis Duis incididunt dolore adipisicing nisi Excepteur labore reprehenderit officia officia in consequat consectetur eu voluptate eu amet deserunt occaecat enim velit consequat nulla in do consequat cupidatat Duis in dolore deserunt mollit culpa non labore sint laborum exercitation eu enim dolore anim cillum nisi aliqua exercitation Excepteur nostrud et est est adipisicing occaecat amet qui do labore fugiat exercitation minim dolor occaecat fugiat officia veniam ut dolor quis sint adipisicing do esse labore et aliquip laborum fugiat et pariatur Duis in dolor fugiat Duis sint dolore eiusmod consectetur laboris ea esse dolore pariatur mollit laborum incididunt adipisicing voluptate laborum nulla qui et dolor sint in ut non.',
				createdAt: new Date()
			}),
			knex('applications').insert({
				id: 4,
				firstName: 'Árni',
				lastName: 'Marissa',
				gpa: 3.9,
				essay: 'Lorem ipsum Et magna ad anim minim Ut cillum laborum irure sint minim sunt adipisicing pariatur consectetur in esse ad dolor ut incididunt sit ad exercitation qui Ut occaecat minim dolor Duis Excepteur minim nulla labore nisi non ut adipisicing sit id amet est culpa deserunt sunt quis Duis incididunt dolore adipisicing nisi Excepteur labore reprehenderit officia officia in consequat consectetur eu voluptate eu amet deserunt occaecat enim velit consequat nulla in do consequat cupidatat Duis in dolore deserunt mollit culpa non labore sint laborum exercitation eu enim dolore anim cillum nisi aliqua exercitation Excepteur nostrud et est est adipisicing occaecat amet qui do labore fugiat exercitation minim dolor occaecat fugiat officia veniam ut dolor quis sint adipisicing do esse labore et aliquip laborum fugiat et pariatur Duis in dolor fugiat Duis sint dolore eiusmod consectetur laboris ea esse dolore pariatur mollit laborum incididunt adipisicing voluptate laborum nulla qui et dolor sint in ut non.',
				createdAt: new Date()
			}),
			knex('applications').insert({
				id: 5,
				firstName: 'Murad',
				lastName: 'Faysal',
				gpa: 4.3,
				essay: 'Lorem ipsum Et magna ad anim minim Ut cillum laborum irure sint minim sunt adipisicing pariatur consectetur in esse ad dolor ut incididunt sit ad exercitation qui Ut occaecat minim dolor Duis Excepteur minim nulla labore nisi non ut adipisicing sit id amet est culpa deserunt sunt quis Duis incididunt dolore adipisicing nisi Excepteur labore reprehenderit officia officia in consequat consectetur eu voluptate eu amet deserunt occaecat enim velit consequat nulla in do consequat cupidatat Duis in dolore deserunt mollit culpa non labore sint laborum exercitation eu enim dolore anim cillum nisi aliqua exercitation Excepteur nostrud et est est adipisicing occaecat amet qui do labore fugiat exercitation minim dolor occaecat fugiat officia veniam ut dolor quis sint adipisicing do esse labore et aliquip laborum fugiat et pariatur Duis in dolor fugiat Duis sint dolore eiusmod consectetur laboris ea esse dolore pariatur mollit laborum incididunt adipisicing voluptate laborum nulla qui et dolor sint in ut non.',
				createdAt: new Date()
			}),
			knex('applications').insert({
				id: 6,
				firstName: 'Matéo',
				lastName: 'Markus',
				gpa: 3.8,
				essay: 'Lorem ipsum Et magna ad anim minim Ut cillum laborum irure sint minim sunt adipisicing pariatur consectetur in esse ad dolor ut incididunt sit ad exercitation qui Ut occaecat minim dolor Duis Excepteur minim nulla labore nisi non ut adipisicing sit id amet est culpa deserunt sunt quis Duis incididunt dolore adipisicing nisi Excepteur labore reprehenderit officia officia in consequat consectetur eu voluptate eu amet deserunt occaecat enim velit consequat nulla in do consequat cupidatat Duis in dolore deserunt mollit culpa non labore sint laborum exercitation eu enim dolore anim cillum nisi aliqua exercitation Excepteur nostrud et est est adipisicing occaecat amet qui do labore fugiat exercitation minim dolor occaecat fugiat officia veniam ut dolor quis sint adipisicing do esse labore et aliquip laborum fugiat et pariatur Duis in dolor fugiat Duis sint dolore eiusmod consectetur laboris ea esse dolore pariatur mollit laborum incididunt adipisicing voluptate laborum nulla qui et dolor sint in ut non.',
				createdAt: new Date()
			}),
			knex('applications').insert({
				id: 7,
				firstName: 'Joss',
				lastName: 'Isabella',
				gpa: 3.9,
				essay: 'Lorem ipsum Et magna ad anim minim Ut cillum laborum irure sint minim sunt adipisicing pariatur consectetur in esse ad dolor ut incididunt sit ad exercitation qui Ut occaecat minim dolor Duis Excepteur minim nulla labore nisi non ut adipisicing sit id amet est culpa deserunt sunt quis Duis incididunt dolore adipisicing nisi Excepteur labore reprehenderit officia officia in consequat consectetur eu voluptate eu amet deserunt occaecat enim velit consequat nulla in do consequat cupidatat Duis in dolore deserunt mollit culpa non labore sint laborum exercitation eu enim dolore anim cillum nisi aliqua exercitation Excepteur nostrud et est est adipisicing occaecat amet qui do labore fugiat exercitation minim dolor occaecat fugiat officia veniam ut dolor quis sint adipisicing do esse labore et aliquip laborum fugiat et pariatur Duis in dolor fugiat Duis sint dolore eiusmod consectetur laboris ea esse dolore pariatur mollit laborum incididunt adipisicing voluptate laborum nulla qui et dolor sint in ut non.',
				createdAt: new Date()
			}),
			knex('applications').insert({
				id: 8,
				firstName: 'Miguelito',
				lastName: 'Rubens',
				gpa: 4.0,
				essay: 'Lorem ipsum Et magna ad anim minim Ut cillum laborum irure sint minim sunt adipisicing pariatur consectetur in esse ad dolor ut incididunt sit ad exercitation qui Ut occaecat minim dolor Duis Excepteur minim nulla labore nisi non ut adipisicing sit id amet est culpa deserunt sunt quis Duis incididunt dolore adipisicing nisi Excepteur labore reprehenderit officia officia in consequat consectetur eu voluptate eu amet deserunt occaecat enim velit consequat nulla in do consequat cupidatat Duis in dolore deserunt mollit culpa non labore sint laborum exercitation eu enim dolore anim cillum nisi aliqua exercitation Excepteur nostrud et est est adipisicing occaecat amet qui do labore fugiat exercitation minim dolor occaecat fugiat officia veniam ut dolor quis sint adipisicing do esse labore et aliquip laborum fugiat et pariatur Duis in dolor fugiat Duis sint dolore eiusmod consectetur laboris ea esse dolore pariatur mollit laborum incididunt adipisicing voluptate laborum nulla qui et dolor sint in ut non.',
				createdAt: new Date()
			}),
			knex('applications').insert({
				id: 9,
				firstName: 'Lara',
				lastName: 'Ruth',
				gpa: 4.1,
				essay: 'Lorem ipsum Et magna ad anim minim Ut cillum laborum irure sint minim sunt adipisicing pariatur consectetur in esse ad dolor ut incididunt sit ad exercitation qui Ut occaecat minim dolor Duis Excepteur minim nulla labore nisi non ut adipisicing sit id amet est culpa deserunt sunt quis Duis incididunt dolore adipisicing nisi Excepteur labore reprehenderit officia officia in consequat consectetur eu voluptate eu amet deserunt occaecat enim velit consequat nulla in do consequat cupidatat Duis in dolore deserunt mollit culpa non labore sint laborum exercitation eu enim dolore anim cillum nisi aliqua exercitation Excepteur nostrud et est est adipisicing occaecat amet qui do labore fugiat exercitation minim dolor occaecat fugiat officia veniam ut dolor quis sint adipisicing do esse labore et aliquip laborum fugiat et pariatur Duis in dolor fugiat Duis sint dolore eiusmod consectetur laboris ea esse dolore pariatur mollit laborum incididunt adipisicing voluptate laborum nulla qui et dolor sint in ut non.',
				createdAt: new Date()
			}),
			knex('applications').insert({
				id: 10,
				firstName: 'Ebony',
				lastName: 'Ilsa',
				gpa: 3.6,
				essay: 'Lorem ipsum Et magna ad anim minim Ut cillum laborum irure sint minim sunt adipisicing pariatur consectetur in esse ad dolor ut incididunt sit ad exercitation qui Ut occaecat minim dolor Duis Excepteur minim nulla labore nisi non ut adipisicing sit id amet est culpa deserunt sunt quis Duis incididunt dolore adipisicing nisi Excepteur labore reprehenderit officia officia in consequat consectetur eu voluptate eu amet deserunt occaecat enim velit consequat nulla in do consequat cupidatat Duis in dolore deserunt mollit culpa non labore sint laborum exercitation eu enim dolore anim cillum nisi aliqua exercitation Excepteur nostrud et est est adipisicing occaecat amet qui do labore fugiat exercitation minim dolor occaecat fugiat officia veniam ut dolor quis sint adipisicing do esse labore et aliquip laborum fugiat et pariatur Duis in dolor fugiat Duis sint dolore eiusmod consectetur laboris ea esse dolore pariatur mollit laborum incididunt adipisicing voluptate laborum nulla qui et dolor sint in ut non.',
				createdAt: new Date()
			}),
			knex('applications').insert({
				id: 11,
				firstName: 'Mia',
				lastName: 'Imtiyaz',
				gpa: 4.0,
				essay: 'Lorem ipsum Et magna ad anim minim Ut cillum laborum irure sint minim sunt adipisicing pariatur consectetur in esse ad dolor ut incididunt sit ad exercitation qui Ut occaecat minim dolor Duis Excepteur minim nulla labore nisi non ut adipisicing sit id amet est culpa deserunt sunt quis Duis incididunt dolore adipisicing nisi Excepteur labore reprehenderit officia officia in consequat consectetur eu voluptate eu amet deserunt occaecat enim velit consequat nulla in do consequat cupidatat Duis in dolore deserunt mollit culpa non labore sint laborum exercitation eu enim dolore anim cillum nisi aliqua exercitation Excepteur nostrud et est est adipisicing occaecat amet qui do labore fugiat exercitation minim dolor occaecat fugiat officia veniam ut dolor quis sint adipisicing do esse labore et aliquip laborum fugiat et pariatur Duis in dolor fugiat Duis sint dolore eiusmod consectetur laboris ea esse dolore pariatur mollit laborum incididunt adipisicing voluptate laborum nulla qui et dolor sint in ut non.',
				createdAt: new Date()
			}),
			knex('applications').insert({
				id: 12,
				firstName: 'Muhammad',
				lastName: 'Flamur',
				gpa: 4.0,
				essay: 'Lorem ipsum Et magna ad anim minim Ut cillum laborum irure sint minim sunt adipisicing pariatur consectetur in esse ad dolor ut incididunt sit ad exercitation qui Ut occaecat minim dolor Duis Excepteur minim nulla labore nisi non ut adipisicing sit id amet est culpa deserunt sunt quis Duis incididunt dolore adipisicing nisi Excepteur labore reprehenderit officia officia in consequat consectetur eu voluptate eu amet deserunt occaecat enim velit consequat nulla in do consequat cupidatat Duis in dolore deserunt mollit culpa non labore sint laborum exercitation eu enim dolore anim cillum nisi aliqua exercitation Excepteur nostrud et est est adipisicing occaecat amet qui do labore fugiat exercitation minim dolor occaecat fugiat officia veniam ut dolor quis sint adipisicing do esse labore et aliquip laborum fugiat et pariatur Duis in dolor fugiat Duis sint dolore eiusmod consectetur laboris ea esse dolore pariatur mollit laborum incididunt adipisicing voluptate laborum nulla qui et dolor sint in ut non.',
				createdAt: new Date()
			}),
			knex('applications').insert({
				id: 13,
				firstName: 'Adalfuns',
				lastName: 'Miklavž',
				gpa: 4.1,
				essay: 'Lorem ipsum Et magna ad anim minim Ut cillum laborum irure sint minim sunt adipisicing pariatur consectetur in esse ad dolor ut incididunt sit ad exercitation qui Ut occaecat minim dolor Duis Excepteur minim nulla labore nisi non ut adipisicing sit id amet est culpa deserunt sunt quis Duis incididunt dolore adipisicing nisi Excepteur labore reprehenderit officia officia in consequat consectetur eu voluptate eu amet deserunt occaecat enim velit consequat nulla in do consequat cupidatat Duis in dolore deserunt mollit culpa non labore sint laborum exercitation eu enim dolore anim cillum nisi aliqua exercitation Excepteur nostrud et est est adipisicing occaecat amet qui do labore fugiat exercitation minim dolor occaecat fugiat officia veniam ut dolor quis sint adipisicing do esse labore et aliquip laborum fugiat et pariatur Duis in dolor fugiat Duis sint dolore eiusmod consectetur laboris ea esse dolore pariatur mollit laborum incididunt adipisicing voluptate laborum nulla qui et dolor sint in ut non.',
				createdAt: new Date()
			}),
			knex('applications').insert({
				id: 14,
				firstName: 'Mikelo',
				lastName: 'Vlastislav',
				gpa: 3.8,
				essay: 'Lorem ipsum Et magna ad anim minim Ut cillum laborum irure sint minim sunt adipisicing pariatur consectetur in esse ad dolor ut incididunt sit ad exercitation qui Ut occaecat minim dolor Duis Excepteur minim nulla labore nisi non ut adipisicing sit id amet est culpa deserunt sunt quis Duis incididunt dolore adipisicing nisi Excepteur labore reprehenderit officia officia in consequat consectetur eu voluptate eu amet deserunt occaecat enim velit consequat nulla in do consequat cupidatat Duis in dolore deserunt mollit culpa non labore sint laborum exercitation eu enim dolore anim cillum nisi aliqua exercitation Excepteur nostrud et est est adipisicing occaecat amet qui do labore fugiat exercitation minim dolor occaecat fugiat officia veniam ut dolor quis sint adipisicing do esse labore et aliquip laborum fugiat et pariatur Duis in dolor fugiat Duis sint dolore eiusmod consectetur laboris ea esse dolore pariatur mollit laborum incididunt adipisicing voluptate laborum nulla qui et dolor sint in ut non.',
				createdAt: new Date()
			}),
			knex('applications').insert({
				id: 15,
				firstName: 'Faithe',
				lastName: 'Brigitte',
				gpa: 3.7,
				essay: 'Lorem ipsum Et magna ad anim minim Ut cillum laborum irure sint minim sunt adipisicing pariatur consectetur in esse ad dolor ut incididunt sit ad exercitation qui Ut occaecat minim dolor Duis Excepteur minim nulla labore nisi non ut adipisicing sit id amet est culpa deserunt sunt quis Duis incididunt dolore adipisicing nisi Excepteur labore reprehenderit officia officia in consequat consectetur eu voluptate eu amet deserunt occaecat enim velit consequat nulla in do consequat cupidatat Duis in dolore deserunt mollit culpa non labore sint laborum exercitation eu enim dolore anim cillum nisi aliqua exercitation Excepteur nostrud et est est adipisicing occaecat amet qui do labore fugiat exercitation minim dolor occaecat fugiat officia veniam ut dolor quis sint adipisicing do esse labore et aliquip laborum fugiat et pariatur Duis in dolor fugiat Duis sint dolore eiusmod consectetur laboris ea esse dolore pariatur mollit laborum incididunt adipisicing voluptate laborum nulla qui et dolor sint in ut non.',
				createdAt: new Date()
			})
		);
	})
	.then(() => {
		return Promise.join(
			knex('collegeApplications').insert({
				collegeId: 1,
				applicationId: 1
			}),
			knex('collegeApplications').insert({
				collegeId: 3,
				applicationId: 1
			}),
			knex('collegeApplications').insert({
				collegeId: 8,
				applicationId: 1
			}),
			knex('collegeApplications').insert({
				collegeId: 2,
				applicationId: 2
			}),
			knex('collegeApplications').insert({
				collegeId: 3,
				applicationId: 2
			}),
			knex('collegeApplications').insert({
				collegeId: 7,
				applicationId: 2
			}),
			knex('collegeApplications').insert({
				collegeId: 6,
				applicationId: 3
			}),
			knex('collegeApplications').insert({
				collegeId: 5,
				applicationId: 3
			}),
			knex('collegeApplications').insert({
				collegeId: 4,
				applicationId: 3
			}),
			knex('collegeApplications').insert({
				collegeId: 1,
				applicationId: 4
			}),
			knex('collegeApplications').insert({
				collegeId: 2,
				applicationId: 4
			}),
			knex('collegeApplications').insert({
				collegeId: 3,
				applicationId: 4
			}),
			knex('collegeApplications').insert({
				collegeId: 5,
				applicationId: 5
			}),
			knex('collegeApplications').insert({
				collegeId: 6,
				applicationId: 5
			}),
			knex('collegeApplications').insert({
				collegeId: 8,
				applicationId: 5
			}),
			knex('collegeApplications').insert({
				collegeId: 2,
				applicationId: 6
			}),
			knex('collegeApplications').insert({
				collegeId: 4,
				applicationId: 6
			}),
			knex('collegeApplications').insert({
				collegeId: 6,
				applicationId: 6
			}),
			knex('collegeApplications').insert({
				collegeId: 3,
				applicationId: 7
			}),
			knex('collegeApplications').insert({
				collegeId: 6,
				applicationId: 7
			}),
			knex('collegeApplications').insert({
				collegeId: 1,
				applicationId: 7
			}),
			knex('collegeApplications').insert({
				collegeId: 4,
				applicationId: 8
			}),
			knex('collegeApplications').insert({
				collegeId: 8,
				applicationId: 8
			}),
			knex('collegeApplications').insert({
				collegeId: 2,
				applicationId: 8
			}),
			knex('collegeApplications').insert({
				collegeId: 5,
				applicationId: 9
			}),
			knex('collegeApplications').insert({
				collegeId: 2,
				applicationId: 9
			}),
			knex('collegeApplications').insert({
				collegeId: 7,
				applicationId: 9
			}),
			knex('collegeApplications').insert({
				collegeId: 6,
				applicationId: 10
			}),
			knex('collegeApplications').insert({
				collegeId: 4,
				applicationId: 10
			}),
			knex('collegeApplications').insert({
				collegeId: 2,
				applicationId: 10
			}),
			knex('collegeApplications').insert({
				collegeId: 7,
				applicationId: 11
			}),
			knex('collegeApplications').insert({
				collegeId: 1,
				applicationId: 11
			}),
			knex('collegeApplications').insert({
				collegeId: 2,
				applicationId: 11
			}),
			knex('collegeApplications').insert({
				collegeId: 8,
				applicationId: 12
			}),
			knex('collegeApplications').insert({
				collegeId: 7,
				applicationId: 12
			}),
			knex('collegeApplications').insert({
				collegeId: 6,
				applicationId: 12
			}),
			knex('collegeApplications').insert({
				collegeId: 5,
				applicationId: 13
			}),
			knex('collegeApplications').insert({
				collegeId: 7,
				applicationId: 13
			}),
			knex('collegeApplications').insert({
				collegeId: 8,
				applicationId: 13
			}),
			knex('collegeApplications').insert({
				collegeId: 6,
				applicationId: 14
			}),
			knex('collegeApplications').insert({
				collegeId: 8,
				applicationId: 14
			}),
			knex('collegeApplications').insert({
				collegeId: 2,
				applicationId: 14
			}),
			knex('collegeApplications').insert({
				collegeId: 1,
				applicationId: 15
			}),
			knex('collegeApplications').insert({
				collegeId: 5,
				applicationId: 15
			}),
			knex('collegeApplications').insert({
				collegeId: 7,
				applicationId: 15
			})
		);
	});
};
