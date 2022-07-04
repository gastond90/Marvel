import React from "react";

export default function Footer() {
  return (
    <footer class="p-4  h-7 bg-gray-900 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-1000 fixed bottom-0 left-0 w-full ">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        Ton Duba ☕
        
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="https://github.com/gastond90/" class="mr-4 hover:underline md:mr-6 ">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gastonduba" class="mr-4 hover:underline md:mr-6">
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/tonduba/" class="mr-4 hover:underline md:mr-6">
           Instagram
          </a>
        </li>
        <li>
          {/* <a href="#" class="hover:underline">
            Contact
          </a> */}
        </li>
      </ul>
    </footer>
  );
}
