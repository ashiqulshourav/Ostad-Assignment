export default function Description() {
  return (
    <>
      <h2>Here I'm going to show the list of file working description</h2>
      <ol>
        <li>
          public folder where we store public resources which can see any user
          when page loading It can be image, video or any file.
        </li>
        <li>App folder is app router</li>
        <li>inside app folder every folder is a single route page</li>
        <li>inside app folder layout.js is master Layout</li>
        <li>
          inside app folder page.js is the main page where we can pass home
          component by children props & this whole process work same as for all
          route page
        </li>
        <li>
          we can also separate our component by creating component name folder
        </li>
        <li>
          not-found.js file is working for any error, suppose user enter by
          unknown route then we can show not-found.js file data to the user
        </li>
        <li>
          We can also separate all api request by creating a file name is api
        </li>
        <li>
          <strong>
            I know lot of things remain in this list. I shared which i already
            know.
          </strong>
        </li>
      </ol>
    </>
  );
}
