sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'febooks/test/integration/FirstJourney',
		'febooks/test/integration/pages/AuthorsList',
		'febooks/test/integration/pages/AuthorsObjectPage',
		'febooks/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, AuthorsList, AuthorsObjectPage, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('febooks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAuthorsList: AuthorsList,
					onTheAuthorsObjectPage: AuthorsObjectPage,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);