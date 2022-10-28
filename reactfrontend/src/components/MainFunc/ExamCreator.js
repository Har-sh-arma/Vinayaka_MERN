import React from 'react'
import './ExC.css'
import QF from '../BasicComp/QuestForm'

const ExamCreator = () => {
    return (
        <div className='pgClassic'>
            <div className="content">
                <button className="addQuest" onclick="addTemplate()">
                    +
                </button>
            </div>

            <div className="formtainer">
                <QF />
            </div>

            <div className="submit">
                <button className="addQuest">
                    Create
                </button>
            </div>
        </div >
    )
}

export default ExamCreator