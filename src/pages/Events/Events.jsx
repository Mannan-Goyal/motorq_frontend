import React, { useEffect } from 'react';
import { getEvents } from '../../api/Request';

function Events() {
    const [events, setEvents] = React.useState([])
    const getData = async () => {
        const event = await getEvents();
        setEvents(event);
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div class="max-w-2xl mx-auto">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div class="p-4">
                        <label for="table-search" class="sr-only">Search</label>
                        <div class="relative mt-1">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />

                        </div>
                        <button
                            type="button"
                            class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                        >
                            Search
                        </button>
                    </div>
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Event Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Event Description
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Event Start Time
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Event End Time
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                events.map((event) => {
                                    return (
                                        <tr
                                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                {event.title}
                                            </th>
                                            <td class="px-6 py-4">
                                                {event.desc}
                                            </td>
                                            <td class="px-6 py-4">
                                                {event.start}
                                            </td>
                                            <td class="px-6 py-4">
                                                {event.end}
                                            </td>
                                            <td class="px-6 py-4 text-right">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Know More</a>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
            </div>
        </>
    );
}

export default Events;
