import React from 'react'

import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-gray-500 text-xs truncate flex-1">
            {file === '' ? "No file selected" : file.name}
          </p>
          {file !== '' && (
            <button
              onClick={() => setFile('')}
              className="ml-2 text-red-500 hover:text-red-700 font-bold text-lg leading-none"
              title="Remove file"
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton 
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <CustomButton 
          type="filled"
          title="Full"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker