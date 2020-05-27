Consuming OpenTable API with React/Redux
========================================


This project provides a simple interface to consume the `OpenTable API`_ using React_ and Redux_.



Run
----

.. code-block:: console

    git clone https://github.com/henriquesgabriel/react-redux-opentable


.. code-block:: console

    cd react-redux-opentable


.. code-block:: console

    docker-compose up --build
    
Local
-----
- https://localhost:3000

Live
-----
- https://opentable-react-redux.herokuapp.com/

Q&A
----

**1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.**

- A couple of days, whenever I had time after work. That would probably add up to 4/5 hours total. I would definitely add an integration suite around api calls, and unit tests around reducers.

**2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you&#39;ve used it.**

-  Async actions in Redux with thunk. Async middleware allows me to dispatch actions asynchronously. I'm constantly calling action creators and returning functions instead of action objects, which in turn enables me to execute async API calls against OpenTable.

**3. How would you track down a performance issue in production? Have you ever had to do this?**

-  LogRocket_ is great for time-travel debugging in production. It allows me to track down performance issues by replaying live actions +  network requests.

**4. How would you improve the API that you just used?**

-  The API seems to be quite slow. Maybe they need a faster serializer.

**5. Please describe yourself using JSON.**

-  Fetching data.

.. _`OpenTable API`: https://github.com/sosedoff/opentable
.. _React: https://github.com/facebook/react
.. _Redux: https://github.com/reduxjs/redux
.. _LogRocket: https://github.com/LogRocket/logrocket
