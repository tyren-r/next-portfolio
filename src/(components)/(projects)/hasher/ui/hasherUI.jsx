'use client'
import React from 'react';
import styles from '../styles/hasherUIStyles.css';
import FileHasherLogic from '../logic/useHasherLogic';
import { useDropzone } from 'react-dropzone';
import ClipLoader from "react-spinners/ClipLoader";

const FileHasherUI = () => {
  const { hashFiles, deleteFile, hashedFiles, isLoading } = FileHasherLogic();
  const { getRootProps, getInputProps } = useDropzone({ onDrop: hashFiles });

  const headers = ["File Name","File Size (Bytes)","File Type","MD5","SHA-1","SHA-2","Delete"];
  const fileArrayKeys = ['file_size','file_type','md5_hash','sha1-base16','sha2']


  const files = hashedFiles.map((hashedFile, index) => (
    <tr key={index} >
      <td >{hashedFile['file_name']}</td>
      {/* order of files wont change, so index as key is okay here */}
      {fileArrayKeys.map((fileKey,index)=><td key={index} align="right">{hashedFile[fileKey] ? (hashedFile[fileKey]) : ('NA')}</td>)}
      <td style={{textAlign:'center'}} ><button onClick={(e) => { e.stopPropagation(); deleteFile(hashedFile) }}><b>Delete</b></button></td>
    </tr>
  ));

  const hasher = () => (
  files.length === 0 ? (
    <div className={styles.uploader}>
      <input {...getInputProps()} />
      <img alt="download" src="/download.png" />
      <h2>Click to Choose a File, or Drop It Here</h2>
    </div>
  ) : 
  (
    <div>
    <table>
      <thead>
        <tr>
          {headers.map((header,index)=><th key={index}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {files}
      </tbody>
    </table>
    <h2 style={{cursor:'pointer'}}>
    <input {...getInputProps()} />
      +
    </h2>
    </div>
  )
  );

  return (
      <div {...getRootProps({ className: 'dropzone' })}>
          {isLoading ? (<ClipLoader />) : (hasher())}
      </div>
  );
}

export default FileHasherUI;