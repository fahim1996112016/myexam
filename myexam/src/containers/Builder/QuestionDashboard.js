import React from 'react'
import { QuestionTypeContent } from '../../components/TeacherDashboard/Question/QuestionTypeContent'
import classes from './QuestionDashboard.module.css'

export const QuestionDashboard = () => {
  

    return (
        <div className={classes.container}>
<p>
  Class:CSE307
</p>
<p>
  Exam Date: 27-1-2021
</p>
<p>
  Duration: 30min
</p>
<p>
  Exam Type: Quiz-1
</p>
<QuestionTypeContent />
        </div>
    )
}
