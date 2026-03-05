#!/bin/bash

data_dir="../data/"
out_file_path="../data/data-info.json"
json="["
for dir in "$data_dir"*/; do
  json_arr='['
  count=0
  for file in "$dir"*; do
    json_arr+='"'
    file_split=(${file//// })
    json_arr+="${file_split[-1]}"
    json_arr+='",\n'
    ((count++))
  done
  json_arr="${json_arr:0:-3}]"
  json+='{\n"country":"'
  dir_split=(${dir//// })
  json+="${dir_split[-1]}"
  json+='",\n"num_entries":'
  json+="$count"
  json+=',\n"entries":'
  json+="$json_arr},\n"
done
json="${json:0:-3}]"
printf "$json" > $out_file_path
