#include <iostream>
#include <bits/stdc++.h>
using namespace std;

// you are given a string Ss and an array of strins of W which sonsists of N strings.

// It is given taht a string X is said to ahv ana anagram subsequence in string Y if.
//There is a subsequence of string Y that is anagram of X.

// Rind the tottal number of strings in W that have at least one anagram -subseuqnece in S.



int solve(string S,int N,vector<string> W)
{
   unordered_map<char,int> mp;
   int cnt = 0;


   for(int i = 0; i < S.length(); i++)
   {
       mp[S[i]]++;
   }

   for(int i = 0; i < N; i++)
   {
    unordered_map<char,int> mp1;
    
    for(int j = 0; j < W[j].length(); j++)
    {
        mp1[W[i][j]]++;
    }

    bool flag = false;

    for(auto it : mp1)
    {
        int occur = it.second;
        char ch = it.first;

        if(mp.find(ch) != mp.end())
        {
            if(occur <= mp[ch])
            {
                flag = true;
            }
            else
            {
                flag = false;
                break;
            }
        }
        else
        {
            flag = false;
            break;
        }
    }

    if(flag)
    {
        cnt++;
    }
   }

   return cnt;
}

int main()
{
    string S;
    cin>>S;
    int N;
    cin>>N;
    vector<string> W(N);
    for(int i=0;i<N;i++)
    {
        cin>>W[i];
    }
    cout<<solve(S,N,W)<<endl;


    return 0;
}