import {
  getStorage,
  ref as sRef,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage'
import {
  getDatabase,
  ref as dbRef,
  set,
  remove,
  get,
  push,
  update,
} from 'firebase/database'
const ApplicantTable = 'Applicant/'
const ResumeTable = 'resume/'
export const uploadFile = async (file, key) => {
  const storage = getStorage()
  const fileName = file.name
  const fileExentsion = fileName.split('.')[1]
  const storageRef = sRef(storage, ResumeTable + key + '.' + fileExentsion)
  await uploadBytes(storageRef, file)
  const dlUrl = await getDownloadURL(storageRef)
  const fileInfo = {
    url: dlUrl,
    fileName: key + '.' + fileExentsion,
  }
  return fileInfo
}
export const writeData = (table, obj) => {
  const db = getDatabase()
  set(dbRef(db, table), obj)
}
export const deleteApplicantData = async (id) => {
  if (id !== '') {
    const applicant = await (
      await get(dbRef(getDatabase(), ApplicantTable + id))
    ).val()
    remove(dbRef(getDatabase(), ApplicantTable + id))
    deleteObject(sRef(getStorage(), ResumeTable + applicant.file_name))
  }
}
export const deleteData = (table) => {
  remove(dbRef(getDatabase(), table))
}
export const updateData = (table, obj) => {
  const db = getDatabase()
  update(dbRef(db, table), obj)
}
export const generateId = (table) => {
  const ref = dbRef(getDatabase(), table)
  const newDbRef = push(ref)
  return newDbRef.key
}
