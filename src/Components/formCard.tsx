/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from "@heroicons/react/solid";
import { ICharacters } from "../Utils/utils";

export default function FormCard({ res }: { res: ICharacters | undefined }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {res?.name === "" ? "notMentioned" : res?.name}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {res?.playedBy[0] === "" ? "not mentioned" : res?.playedBy[0]}
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Played By</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {res?.playedBy[0] === "" ? "not mentioned" : res?.playedBy[0]}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Gender</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {res?.gender === "" ? "fe-male" : res?.gender}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Titles</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {res?.titles[0] === "" ? "No Titles" : res?.titles.join()}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Aliases</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {res?.aliases[0] === "" ? "No aliases" : res?.aliases.join()}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Tv Shows</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {res?.tvSeries.length === 0 || res?.tvSeries[0] === ""
                ? "No Tv shows"
                : res?.tvSeries.join()}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Pov Books</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {res?.povBooks.length === 0 || res?.povBooks[0] === ""
                ? "No Pov Books"
                : res?.povBooks.join()}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
