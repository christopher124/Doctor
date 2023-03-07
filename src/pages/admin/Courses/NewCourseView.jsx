import { FormCourses } from "../../../components/form/FormCourses";

export function NewCourseView() {
  return (
    <>
      <div className="w-full min-h-screen p-4">
        <div className="w-full mb-6 pt-3">
          <div className="flex flex-row items-center justify-between mb-4">
            <div className="flex flex-col">
              <div className="text-base font-bold text-gray-500 uppercase">
                <span className="text-gray-600">Vista General</span>
                <div className="text-xl font-bold">
                  <span className="text-gray-600">Nuevo Curso</span>
                </div>
              </div>
            </div>
          </div>
          <FormCourses />
        </div>
      </div>
    </>
  );
}
