import React from 'react'

export const Usuario = ({ usuario }) => (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4 w-4">
            <div className="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
            </div>
        </td>
        <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
            <div className="text-base font-semibold">
                {usuario.nombre}
            </div>
        </th>
        <td className="py-4 px-6">
            {usuario.email}
        </td>
        <td className="py-4 px-6">
            {usuario.role}
        </td>
        <td className="py-4 px-6">
            <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
            </div>
        </td>
        <td className="py-4 px-6">
            <button disabled className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</button>
        </td>
    </tr>
)
