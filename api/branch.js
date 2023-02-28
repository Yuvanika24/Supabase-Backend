//branch.js
import express from 'express'
import {createClient} from '@supabase/supabase-js'
import bodyparse from 'body-parser'
const app = express()
const port = 3000
const supabase = createClient(
    'https://zgreebnnbselpipxbawg.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpncmVlYm5uYnNlbHBpcHhiYXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1NjM3MDYsImV4cCI6MTk5MzEzOTcwNn0.NkCJAbSb7ZhJ2XsPUmxVgvxk6BpzYnNDmrZgGmcOngY'
);
app.use(bodyparse.json())
app.use(
    bodyparse.urlencoded({
        extended: true,
    })
)
 export default async function branch(req, res) {
    const {data , error} = await supabase
    .from('Bank')
    .select()
    .ilike('branch',`${req.query.q}`)    
    .order('ifsc',{ascending:false})
    .range(parseInt(req.query.offset),parseInt(req.query.offset)+parseInt(req.query.limit)-1)
            res.send(data)
    
}
