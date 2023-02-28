import express from 'express'
import {createClient} from '@supabase/supabase-js'
import bodyparse from 'body-parser'
const app = express()
const port = 3000
const supabase = createClient(
    'https://spoqlamtqkvzssizqwpz.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwb3FsYW10cWt2enNzaXpxd3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0ODgzMTEsImV4cCI6MTk5MzA2NDMxMX0.L1-0Iwno0pecv0sVyyw3pvq4sI1lNWpGpQuAeHpHhQU'
);
app.use(bodyparse.json())
app.use(
    bodyparse.urlencoded({
        extended: true,
    })
)
export default async function search(req, res) {
    console.log("hi")
        const {data, error} = await supabase
            .from('Bank')
            .select()
.or(`branch.ilike.%${req.query.q.toLowerCase()}%,city.ilike.%${req.query.q.toLowerCase()}%,district.ilike.%${req.query.q.toLowerCase()}%,state.ilike.%${req.query.q.toLowerCase()}%`)
            .order('ifsc',{ascending:true})
.range(parseInt(req.query.offset),parseInt(req.query.offset)+parseInt(req.query.limit)-1)
        res.send(data)
}
