GET _search/logs_index
{
  "query": {
    "match_all": {}
  }
}

GET _cat/indices/

GET logs_index/_search?pretty=true&q=*


GET logs_index/_search
{
  "size": 0,
  "query": {
    "match": {
      "message": "http_status_code=500"
    }
  }
}

GET logs_index/_search
{
  "size": 0,
  "track_total_hits": true,
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "message": "http_status_code=500"
          }
        },
        {
          "range": {
            "@timestamp": {
              "gte": "now-6h",
              "lte": "now"
            }
          }
        }
      ]
    }
  }
}
