#include <iostream>
#include <bits/stdc++.h>
using namespace std;

/*
Mark loves to play with arrays and he has an array A which consists of N integers.
Mark wants to divide A into several parts without changing the order of the elements so that each element exists in exactly one par and the values on each part are pretty.
mark call values in some parts pretty if the XOR of all the elements in that part is between the L and R inclusive.
Find the number of ways Mraks can divide A into parts such that all re pretty. Since the answer can be very large return nit modulo 10^9 + 7.
*/

// int calculateNoOfWays(int N, int L, int R, vector<int>A)
// {
//     int mod=1000000007;
//     vector<vector<int>> dp(N+1,vector<int>(2,0));
//     dp[0][0]=1;
//     int prefix=0;
//     for(int i=0;i<N;i++)
//     {
//         prefix^=A[i];
//         for(int j=0;j<2;j++)
//         {
//             for(int k=0;k<2;k++)
//             {
//                 if(prefix>=L && prefix<=R)
//                 {
//                     dp[i+1][1]=(dp[i+1][1]+dp[i][k])%mod;
//                 }
//                 else
//                 {
//                     dp[i+1][k]=(dp[i+1][k]+dp[i][k])%mod;
//                 }
//             }
//         }
//     }
//     return dp[N][1];
// }

int calculateNoOfWays(int N, int L, int R, vector<int>A)
{
    int mod = 1e7 + 9;
    
}

int main()
{
    int N;
    cin>>N;
    int L;
    cin>>L;
    int R;
    cin>>R;
    vector<int> A(N);
    for(int i=0;i<N;i++)
    {
        int element;
        cin>>element;
        A.push_back(element);
    }
    return 0;
}