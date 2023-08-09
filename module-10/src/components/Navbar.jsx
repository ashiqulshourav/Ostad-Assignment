import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/product">product</Link>
        </li>
        <li>
          <Link href="/profile">profile</Link>
        </li>
        <li>
          <Link href="/description">folder structure description</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
